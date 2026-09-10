import React,{useState} from 'react'
import Project from "./Project";


const initialProjects = [
    {
        title: "The Heritage Villa",
        description: "A beautifully designed residential villa combining modern comfort with traditional architectural elements."
    },
    {
        title: "Mara Lodge",
        description: "A stylish hospitality project inspired by the natural beauty and cultural heritage of the Maasai Mara."
    }
];

function ProjectList() {
    const [projects, setProjects] = useState(initialProjects);
    const [search, setSearch] = useState("");
    const [newProject, setNewProject] = useState({ 
        title: "", 
        description: "" }); 


    const filteredProjects = projects.filter((project) =>
            project.title.toLowerCase().includes(search.toLowerCase())
        )
    
    function handleChange(event) {
        const {name, value} = event.target;
        setNewProject(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setProjects([...projects, newProject]);

        setNewProject({
            title: "",
            description: ""
        });
    }

       return (
    <>
      <h2>Projects List</h2>
     <div className="projects">
    <div>
        <form onSubmit={handleSubmit}>
            <label >Project Name:</label>
            <input className="form-control" name="title" value={newProject.title} onChange={handleChange} placeholder="Enter project name"/>
            
            <br />

            <label >Description:</label>
            <input className="form-control" name="description" value={newProject.description} onChange={handleChange} placeholder="Enter project description"
              rows="5"/>
            
            <br />

            <button type="submit">Add Project</button>
                  <br />  
        </form>
        </div>  
        <div>
           <input className="form" name="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search Projects" />
        
        {filteredProjects.length > 0 && filteredProjects.map((project) => (
            <Project 
                    key={project.title} 
                    title={project.title} 
                    description={project.description} 
                    />
        ))}
        </div>

        <br />  
        <footer className="footer">
                <p>© 2026 Heritage House. All Rights Reserved.</p>
            </footer>
     </div>
    </>
  )
};  
export default ProjectList