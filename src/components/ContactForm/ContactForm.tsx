import { ChangeEvent, FormEvent, useState } from 'react';
import './ContactForm.scss';

interface ContactData {
  nome: string;
  email: string;
  servico: string;
  mensagem: string;
}

interface Service {
  label: string;
  value: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({ nome: '', email: '', mensagem: '', servico: '' })

  const services: Service[] = [
    { label: 'Loja Virtual', value: 'loja-virtual' },
    { label: 'Landing Page', value: 'landing-page' },
    { label: 'E-commerce de qualidade', value: 'ecommerce' },
    { label: 'Serviços de agiotagem', value: 'agiotagem' },
    { label: 'Cuidado Esposal', value: 'esposa' }
  ]

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Lógica de envio de mensagem aqui
    e.preventDefault();

    console.log(`Nome: ${formData.nome} - E-mail: ${formData.email} - Serviço: ${formData.servico} - Mensagem: ${formData.mensagem}`);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form className="fomulario" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group">
          <label className="body-info-light form-label" htmlFor="nomeInput">Nome</label>
          <input className="form-control" type="text" name="nome" id="nomeInput" placeholder="Digite seu nome" onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label className="body-info-light form-label" htmlFor="emailInput">Email</label>
          <input className="form-control" type="email" name="nome" id="emailInput" placeholder="Digite seu email" onChange={handleInputChange} required />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label className="body-info-light form-label" htmlFor="servicoSelect">Serviço</label>
          <select name="servico" id="servicoSelect" className="form-control" defaultValue={""} onChange={handleSelectChange} required>
            <option value="">Selecione o serviço desejado</option>
            {services.map(({ label, value }, index) => <option key={index} value={value}>{label}</option>)}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label className="body-info-light form-label" htmlFor="mensagemTextarea">Mensagem</label>
          <textarea name="mensagem" id="mensagemTextarea" cols={30} rows={10} className="form-control" placeholder="Digite sua mensagem"
            onChange={handleTextAreaChange} required></textarea>
        </div>
      </div>
      <button type="submit" className="send-message body-text">Enviar mensagem</button>
    </form>
  )
}