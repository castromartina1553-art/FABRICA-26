import Field from "./Field";

export default function SelectField({
    label,
    value,
    onChange,
    options=[],
    required = false
}) {
    return <Field
    label={label}
    required={required}
    >
        <select
        value={value}
        onChange ={e => onChange(e.target.value)}
        required={required}
        >
            <option disabled>--Seleccione una opcion--</option>
            {options.map(option => <option
                key={option.value}
                value={option.value}
            >
                {option.label}
            </option>
            )}
        </select>
        aca va el select
    </Field>
}