import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const formData = {
            name, phone, email
        }
        
        onConfirm(formData)
    }

    return (
        <div className='container-form'>
            <form className='Form' onSubmit={handleConfirm}>
                <div className='Form-Group'>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text'  value={name} onChange={({target}) => setName(target.value)}/>
                </div>
                <div className='Form-Group'>
                    <label htmlFor='phone'>Teléfono</label>
                    <input type='text'  value={phone} onChange={({target}) => setPhone(target.value)}/>
                </div>
                <div className='Form-Group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'  value={email} onChange={({target}) => setEmail(target.value)}/>
                </div>
                <button className='Btn' type='submit'>Confirmar</button>
            </form>
        </div>
    )
        
}

export default CheckoutForm