import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const {data: appointments, isLoading} = useQuery('appointments', () => fetch(`https://shielded-hollows-05722.herokuapp.com/appointment`).then(res => res.json()))


  /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */

  const imgStorageKey = 'f28d2a95e04aead7eaf32e68add71be5';

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        // console.log(result);
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                speciality: data.speciality,
                img: img
            }

            //send doctor to the database
            fetch(`https://shielded-hollows-05722.herokuapp.com/doctors`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                if(inserted.insertedId){
                    toast.success('Successfully added new doctor')
                    reset();
                }
            })
            
        }
    })
  };

  if(isLoading){
    return (
        <div className="flex w-screen h-screen items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      );
  }
  return (
    <div className="flex mt-12 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-center">Add New Doctor</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              placeholder="Fullname"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Name is required</span>
            )}
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}

            <select {...register("speciality", {
                required: true,
              })} class="select select-bordered w-full max-w-xs">
            {
                appointments?.map(appointment => <option
                    key={appointment._id}
                    value={appointment.name}

                >
                    {appointment.name}</option>)
            }
            </select>

            <input
              type="file"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("image", {
                required: true,
              })}
            />
            {errors.file?.type === "required" && (
              <span className="text-red-500">Image is required</span>
            )}

            <input
              className="btn w-full max-w-xs my-3"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
