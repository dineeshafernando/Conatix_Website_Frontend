import { ChevronDown } from "lucide-react"

interface Option {
  label: string,
  value: string,
}

interface FormInputProps {
  type?: string,
  name: string,
  id: string,
  placeholder?: string,
  isTextArea?: boolean,
  isSelect?: boolean,
  options?: Option[],
  isRequired?: boolean,
}

export default function InputField({type, name, id, placeholder, isTextArea, isSelect, options, isRequired}:FormInputProps) {
  if (isTextArea) {
    return (
    <div>
      <label htmlFor={id}>{isRequired ? " *" : ""}{name}</label>
      <textarea name={name} id={id} placeholder={placeholder} className="contact-input w-full h-75" />
    </div>
    )
  }

  else if (isSelect) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor={id} className="text-xl ml-1">{name}{isRequired ? " *" : ""}</label>
      <div className="relative">
        <select name={name} id={id} className="contact-input appearance-none w-full">
          <option value="">{placeholder || "Choose an option"}</option>
          {options!.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="center-chevron-icon" />
      </div>
    </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor={id} className="text-xl ml-1">{name}{isRequired ? " *" : null}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} className="contact-input" />
    </div>
  )
}