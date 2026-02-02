import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // TODO: Aqui va la API que envia el formulario
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <p className="text-xl text-gray-600">Contacto</p>

      {/* Nombre */}
      <div>
        <label className="text-sm text-gray-500 font-medium">Nombre</label>
        <input
          type="text"
          placeholder=""
          {...register("nombre", { required: "El nombre es obligatorio" })}
          className="w-full border-1 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm text-gray-500 font-medium">E-mail</label>
        <input
          type="email"
          placeholder=" "
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email inválido",
            },
          })}
          className="w-full border-1 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="text-sm text-gray-500 font-medium">
          Teléfono / Celular
        </label>
        <input
          type="text"
          placeholder=" "
          {...register("telefono", {
            required: "El teléfono es obligatorio",
            minLength: {
              value: 8,
              message: "Debe tener al menos 8 dígitos",
            },
          })}
          className="w-full border-1 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        {errors.telefono && (
          <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="text-sm text-gray-500 font-medium">Mensaje</label>

        <textarea
          placeholder=" "
          rows="5"
          {...register("mensaje", {
            required: "El mensaje no puede estar vacío",
          })}
          className="w-full border-1 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
        ></textarea>
        {errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-linear-45 from-indigo-400 via-sky-400 to-emerald-400 text-shadow-lg/30 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
