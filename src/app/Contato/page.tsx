"use client"
import Header from '@/components/Header'
import VideoCompoment from '@/components/VideoComponent';
import { Send } from 'lucide-react';
import React, { useState } from 'react'

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Enviando para o backend
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Envia os dados do formulário
            });

            if (response.ok) {
                setStatus('success'); // Sucesso no envio
                setFormData({ name: '', email: '', telefone: '', message: '' });
                setTimeout(() => setStatus("idle"), 3000) // Limpa o formulário
            } else {
                setStatus('error'); // Erro no envio
            }
        } catch (error) {
            console.error('Erro:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] overflow-hidden flex justify-center items-center pb-10">

            <VideoCompoment arquivoMP4={"/videos/contato.mp4"} arquivoStatic={"/videos/static/contato.webp"} />

            <Header />

            <div className=" w-full md:w-[90%] rounded-lg shadow-lg z-20 flex flex-col gap-20 justify-center container mx-auto p-8 mt-[10vh]">

                <form onSubmit={handleSubmit} className="space-y-4 w-full md:w-[50%] lg:w-[50%] bg-gray-800/50 rounded-lg p-4 mx-auto">
                    <h2 className='font-bold text-3xl md:text-4xl text-white text-center'>Entre em Contato </h2>

                    <div className="space-y-2">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome"
                            required
                            className="w-full p-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="space-y-2">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full p-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="space-y-2">
                        <input
                            type="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="Telefone"
                            required
                            className="w-full p-3 transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div className="space-y-2">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Mensagem"
                            required
                            rows={4}
                            className="w-full p-3 transition-all border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex items-center justify-center w-full px-6 py-3 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-70"
                    >
                        <Send className="w-5 h-5" />
                        <span>{status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                    </button>
                    {status === 'success' && (
                        <p className="text-center text-green-600">Mensagem enviada com sucesso!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-red-600">Erro ao enviar mensagem. Tente novamente.</p>
                    )}
                </form>


            </div>

        </div>
    )
}

export default Page
