import { useState } from "react";
import {
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useGetAllGenresQuery,
  useUpdateGenreMutation,
} from "../../redux/api/genreApiSlice";
import GenreForm from "../../components/GenreForm";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";

interface Genre {
  _id: string;
  name: string;
}

const GenreList = () => {
  const { data: genresResponse, isLoading, isError, refetch } = useGetAllGenresQuery({});
  const [name, setName] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [updatingGenre, setUpdatingGenre] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [createGenre] = useCreateGenreMutation();
  const [updateGenre] = useUpdateGenreMutation();
  const [deleteGenre] = useDeleteGenreMutation();

  // Handle different possible response structures
  const genres = Array.isArray(genresResponse) 
    ? genresResponse 
    : genresResponse?.data || genresResponse?.genres || [];

    const handleCreateGenre = async (e: any) => {
        e.preventDefault();
        if (name.trim() === "") {
          toast.error("Genre name cannot be empty");
          return;
        }
        
        try {
          const result = await createGenre({ name }).unwrap();
          console.log("Create genre success:", result);
          setName("");
          toast.success("Genre created successfully");
          refetch(); // Refresh the genre list
        } catch (error: any) {
          console.error("Failed to create genre:", error);
          // Show more detailed error message if available
          const errorMessage = error.data?.message || "Failed to create genre";
          toast.error(errorMessage);
        }
      };

      const handleUpdateGenre = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedGenre || !updatingGenre.trim()) return;
        
        try {
          await updateGenre({
            id: selectedGenre._id,
            genreData: { name: updatingGenre }
          }).unwrap();
          toast.success("Genre updated successfully");
          setModalVisible(false);
          refetch();
        } catch (error) {
          toast.error("Failed to update genre");
        }
      };
      
      const handleDeleteGenre = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedGenre) return;
        
        try {
          await deleteGenre(selectedGenre._id).unwrap();
          toast.success("Genre deleted successfully");
          setModalVisible(false);
          refetch();
        } catch (error) {
          toast.error("Failed to delete genre");
        }
      };
      
  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Error loading genres</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Genre List</h1>
      <GenreForm
        value={name}
        setValue={setName}
        handleSubmit={handleCreateGenre}
        buttonText="Create Genre"
        handleDelete={null}
      />
      
      <div className="mt-6 w-full max-w-md">
        {genres.length > 0 ? (
          genres.map((genre: Genre) => (
            <div
              key={genre._id}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <span>{genre.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedGenre(genre);
                    setUpdatingGenre(genre.name);
                    setModalVisible(true);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedGenre(genre);
                    setModalVisible(true);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No genres found</p>
        )}
      </div>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <GenreForm
          value={updatingGenre}
          setValue={setUpdatingGenre}
          handleSubmit={handleUpdateGenre}
          buttonText="Update Genre"
          handleDelete={handleDeleteGenre}
        />
      </Modal>
    </div>
  );
};

export default GenreList;