import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION ,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async (file, key, contentType) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME ,
    Key: key,
    Body: file,
    ContentType: contentType,
    ACL: contentType.includes("avatar") ? "private" : "public-read",
  };

  try {
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return {
      Location: `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    };
  } catch (error) {
    throw new Error(`S3 Upload Error: ${error.message}`);
  }
};

export const getPresignedUrl = async (key, operation = "getObject") => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME ,
    Key: key,
  };

  try {
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
    return url;
  } catch (error) {
    throw new Error(`S3 Presigned URL Error: ${error.message}`);
  }
};

export default s3Client;