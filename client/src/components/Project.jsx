import { AiFillGithub } from 'react-icons/ai';

export default function Project(props) {
    return (
        <>
            <div>
                <a href={props.project.siteLink} target="_blank" rel="noreferrer"><img className='project' src={props.project.screenshot}></img></a>
                <div>
                    <h4 className='project-description'><a href={props.project.repositoryLink} target="_blank" rel="noreferrer">{props.project.description} Click to see <AiFillGithub /> repo.</a></h4>
                </div>

            </div>
        </>
    )
}