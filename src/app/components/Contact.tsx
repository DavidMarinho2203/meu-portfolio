"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
        setFormData({ name: '', email: '', telefone: '', message: '' }); // Limpa o formulário
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
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-4xl font-bold text-center">Contato</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Vamos conversar!</h3>
              <p className="text-gray-600">
                Estou sempre interessado em novos projetos e oportunidades de colaboração.
              </p>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="davidbeckhampm.dev@gmail.com" />
                <ContactInfo icon={<Phone />} text="+55 (83) 99181-3692" />
                <ContactInfo icon={<MapPin />} text="João Pessoa - PB, Brasil" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3">
    <div className="text-blue-600">{icon}</div>
    <span className="text-gray-700">{text}</span>
  </div>
);

export default Contact;
