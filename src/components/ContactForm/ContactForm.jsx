import { useForm } from "react-hook-form";
import { WhatsAppIcon } from "../../icons";

export default function ContactForm({ property, message }) {
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

  const inputLabel = "text-sm text-gray-500 font-medium";

  const inputClass =
    "w-full border-1 border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-3 focus:ring-blue-300 focus:bg-gray-100";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 ">
      <p className="text-xl text-gray-600">Contacto</p>

      {/* Nombre */}
      <div>
        <label className={inputLabel}>Nombre</label>
        <input
          type="text"
          placeholder=""
          {...register("nombre", { required: "El nombre es obligatorio" })}
          className={inputClass}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className={inputLabel}>E-mail</label>
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
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className={inputLabel}>Teléfono / Celular</label>
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
          className={inputClass}
        />
        {errors.telefono && (
          <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className={inputLabel}>Mensaje</label>

        <textarea
          placeholder=" "
          rows="5"
          {...register("mensaje", {
            required: "El mensaje no puede estar vacío",
          })}
          className={inputClass}
        ></textarea>
        {errors.mensaje && (
          <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white shadow-xs/30 text-center bg-sky-500 rounded-lg py-2 px-1 hover:bg-sky-600"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>

      {property !== undefined && property.id > 0 && (
        <div className="w-full text-white shadow-xs/30 text-center bg-green-500 rounded-lg py-2 px-1 hover:bg-green-600">
          <a
            href={`https://wa.me/598095291547?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="text-white inline" width={"24px"} />{" "}
            WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
