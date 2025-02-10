interface IProps {
    title: string;
    subtitle: string;
    vector_color?: string;
}
const SectionTitle = ({ title, subtitle, vector_color }: IProps) => {
    return (
        <div className="text-center">
            {subtitle &&
                <p className={`${vector_color ? `text-${vector_color}` : "text-white"} font-medium tracking-wider uppercase`}>{subtitle}</p>
            }
            <p className={`font-bold ${vector_color ? "text-white" : "text-secondary"} text-5xl mt-2 relative z-10`}>{title}</p>
            <div className={`justify-self-end ${vector_color ? `text-${vector_color}` : "text-white"} `}>
                {<svg width="196" height="6" viewBox="0 0 196 6" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.858395 1.05505C3.40064 0.497868 5.79051 0.319736 8.25485 0.260891C23.0784 -0.0901088 37.9489 0.153868 52.8197 0.388704C83.9545 0.878807 115.087 1.29029 146.232 2.12544C158.876 2.46556 171.511 2.91821 184.127 3.75383C187.595 3.98324 190.874 4.57515 194.221 5.06419C194.762 5.13049 195.299 5.21389 195.829 5.31404C192.205 5.45594 188.741 6.0061 185.043 5.99748C171.706 5.96414 158.368 5.40459 145.025 5.0881C113.42 4.33754 81.8151 3.65714 50.2093 2.75783C37.9854 2.41027 25.7626 2.15885 13.5409 2.00356C9.54971 1.95341 5.53625 1.95282 1.64181 1.21205C1.48193 1.18207 1.31255 1.14717 0.858395 1.05505Z" fill="currentColor" />
                </svg>}
            </div>
        </div>
    )
}

export default SectionTitle