import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


export default function Contato() {
    const {formData,isSubmitting,submitStatus,handleChange,handleSubmit} = useContext(UserContext)

    return (
        <main className="flex flex-col h-full gap-5 py-5">
            <section className="flex flex-col gap-4 py-5 text-center">
                <h2 className="px-4 text-2xl font-bold sm:px-22 md:px-40 lg:px-60">Contato</h2>
                <div className="w-1/5 h-1 mx-auto rounded-3xl bg-roxo"></div>
                <p className="px-4 text-sm sm:px-22 md:px-40 lg:px-60">No momento estou apenas com essas formas de contato, até pela segurança mesmo</p>
            </section>

            <section className="flex flex-col items-center px-4 md:px-22 lg:px-40">
                <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 text-white rounded bg-roxo hover:bg-roxo-dark disabled:bg-gray-400"
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                    {submitStatus && (
                        <p className={`mt-4 text-center ${submitStatus.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                            {submitStatus}
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}
