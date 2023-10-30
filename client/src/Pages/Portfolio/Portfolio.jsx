import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import { getProjects } from '../../utils/data';
import './style.css';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        const projects = await getProjects();
        setProjects(projects);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2 className="page-header">Portfolio</h2>
            <div className='project-container'>
                {projects.map((project) => (
                    <Project key={project.id} project={project}>
                        <Link
                            to={`/project/${project.id}`}>
                        </Link>
                    </Project>
                ))}
            </div>
        </div>
    )
}