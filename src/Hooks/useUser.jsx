import { useEffect, useState } from "react"
import dataJson from "../Data/data.json"
import emailjs from 'emailjs-com';

export default function useUser() {
    // Importei o dados do dataJson
    const dados = dataJson[0]

    // Estado para controlar o menu, mas ele só vai está funcionando até a tela de 600px
    const [menuAberto, setMenuAberto] = useState(false)
    useEffect(() => {
        if (window.innerWidth >= 600) {
            setMenuAberto(true)
            setSociais(true)
            setMainAtivado(true)
        } else {
            setMenuAberto(false)
            setSociais(false)
        }
    }, [window.innerWidth])
    // função redirecionar o site para o topo 
    const subirParaOTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Faz o scroll suave
        });
    }

    // estado usado para quando o menu for ativado
    const [mainAtivado, setMainAtivado] = useState(true)
    // função para abrir o menu.
    const abrirMenu = () => {
        setMenuAberto(state => {
            if (window.innerWidth >= 600) {
                setMainAtivado(true)
                return true
            } else {
                setMainAtivado(state)
                return !state
            }

        })
    }
    // estado para quando tiver com o width em tamanho de tablet
    const [sociais, setSociais] = useState(false)

    // Separei último projeto dos resto.
    const projetoDestaque = dados.projetos[0]
    const projetosRestante = dados.projetos.slice(1,)

    // Criei um estado para quando o mouser passar por cima dos projetos
    const [verProjeto, setVerProjeto] = useState([])
    // função criada para quando entrar em um projeto o estado mudar.
    const entrarNoProjeto = (nome) => {
        setVerProjeto(state => {
            if (state.length > 0) {
                return []
            } else {
                return [nome]
            }
        })
    }

    // Configurando para receber o email
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.send('service_savy5th', 'template_vz0p2r9', formData, 'pzJ6qxW24-H4NrGLI')
            .then((response) => {
                setSubmitStatus('Email enviado com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setSubmitStatus('Ocorreu um erro ao enviar o email.');
                console.error(error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };


    return { dados, menuAberto, setMenuAberto, abrirMenu, sociais, mainAtivado, projetoDestaque, projetosRestante, verProjeto, entrarNoProjeto, subirParaOTopo, isSubmitting, submitStatus, formData, handleChange, handleSubmit }
}