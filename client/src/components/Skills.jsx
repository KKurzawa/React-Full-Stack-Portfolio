export default function Skills(props) {
    return (
        <a href={props.skill.link} target="_blank" rel="noreferrer">
            <div className="skill">{props.skill.icon}</div>
            <h4 className="skill-name">{props.skill.name}</h4>
        </a>
    )
}