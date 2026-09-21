export default function Field({ //sirve para crear un campo de formulario con una etiqueta y un input
    label,
    children,
    required = false    
}){
    return <div>
        
        <label>
            {required && <span style={{ color: 'red' }} title="Este dato es obligatorio">*</span>}
            {label}
        </label>
        {children}
    </div>

}