'use client'
import { ProjectType } from '@/utilities/type'
import { useEffect , useState} from 'react'
import Modal from 'react-modal';
import ProjectTechstack from './projecttechstack'
import ProjectModal from './projects-modal/project-modal';

interface ProjectcardProps {
    data: ProjectType
}

export default function Projectcard(props:ProjectcardProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // document.body.style.overflow = 'hidden';

  }

  function closeModal() {
    setIsOpen(false);
    // document.body.style.overflow = 'unset';
  }

  useEffect(() => {
    setIsClient(true); // Ensure we're on the client side
  }, []);

  useEffect(() => {
    if (isClient) {
      Modal.setAppElement('#__next'); // Set your root element ID
    }
  }, [isClient]); // Run only when the component is mounted on the client




  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel={props.data.title}
      
      closeTimeoutMS={100}
      className='Modal'
      overlayClassName={'fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm  '} 
    
    >
      <ProjectModal data={props.data} closeModal={closeModal} />
   
    </Modal>

    <div className='w-full gap-4 h-auto sm:gap-0 sm:h-60 bg-foreground  p-4 rounded-lg flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:bg-neutral-800 transition-all' onClick={openModal}>
        <div>
            <h1 className=''>{props.data.title}</h1>
            <p className='text-textcontent font-normal text-sm text-ellipsis overflow-hidden'>{props.data.description}</p>
        </div>
        <div className='flex gap-2 w-full flex-wrap'>
            
            {props.data.stack.map((tech, index) => (
                <ProjectTechstack key={index} data={tech} />
            ))}
            
        </div>
    </div>
    </>
  )
}
