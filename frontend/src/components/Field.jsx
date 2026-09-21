export default function Field({ //sirve para crear un campo de formulario con una etiqueta y un input
    label,
    children
}){
    return <div>
        <label>{label}</label>
        {children}
    </div>

}