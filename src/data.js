import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/flutter.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/supabase.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/firebase.png";
import Tools13 from "/assets/tools/html.png";
import Tools14 from "/assets/tools/css.png";
import Tools15 from "/assets/tools/vite.png";
import Tools16 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Flutter",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Supabase",
    ket: "Backend Service",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Firebase",
    ket: "Backend Service",
    dad: "1300",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];



import Proyek7 from "/assets/proyek/putrabungsu.png";
import Proyek8 from "/assets/proyek/smartlocker.png";
import Proyek9 from "/assets/proyek/reha.png";
import Proyek10 from "/assets/proyek/adistyfitur.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek7,
    title: "Pt Dua Putra Bungsu",
    subtitle: "Prototype Web Catalog for Contractor Equipment Rental Solutions.",
    fullDescription:"This project is a modern UI prototype developed to represent a web-based catalog system for PT Dua Putra Bungsu, a company engaged in contractor equipment rental services. The platform is designed to showcase a wide range of construction tools and heavy equipment in a structured, user-friendly interface, enabling customers to easily browse, search, and explore available rental options. Built with a focus on clean design and usability, this prototype emphasizes intuitive navigation, detailed product presentation, and a professional digital presence to support business growth. The system concept can be further integrated with backend services for real-time availability, booking management, and customer interaction, making it a scalable solution for future development.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.figma.com/proto/8mrx0FaHY3GvGpyMrCJmrY/Batu_Pijakan?page-id=1469%3A1466&node-id=2211-1867&viewport=-1976%2C2298%2C0.46&t=CXhCrVpX39n2QhGO-1&scaling=min-zoom&content-scaling=fixed",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek8,
    title: "Smart Locker",
    subtitle: "A Multi-Tenant Smart Infrastructure Management System for Resilient and Transparent Communities.",
    fullDescription:"Fix It Now is a sophisticated, multi-tenant facility management ecosystem built with Next.js to deliver a fast, SEO-friendly, and responsive interface for reporting and tracking public infrastructure. By leveraging Supabase for its robust PostgreSQL database and seamless real-time capabilities, the platform allows users in universities, corporations, or government bodies to report damages, upload photos, and track repair tickets with instant status updates. The application promotes transparency by enabling a dual-flow system where the public can both report issues and offer appreciation for well-maintained facilities, while administrators benefit from a powerful backend to manage maintenance workflows. Designed with a generic, scalable architecture, Fix It Now empowers any organization to register and independently manage their digital infrastructure, ensuring efficient maintenance and high-quality environments through modern web technology.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/StreamLine-18/Smart-Locker/releases/tag/v0.0.1",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek9,
    title: "Reha (Reminder Web)",
    subtitle: "Smart Web-Based Schedule Reminder for Better Time Management.",
    fullDescription:"Reha is a web-based application designed to help users manage and remember their daily schedules efficiently. The platform provides an intuitive interface for creating, organizing, and tracking tasks or events, ensuring that important activities are never missed. With features such as real-time reminders, schedule notifications, and structured task management, Reha enhances productivity and time awareness. Built with a focus on simplicity and usability, this system can be further developed with integrations like calendar synchronization, push notifications, and personalized reminders, making it a scalable solution for both personal and professional use.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/RafliHajat92/responsitekweb-REHA-.git",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek10,
    title: "Adisty face Id and E-ktm",
    subtitle: "Figma Prototype for Face ID Login and E-KTM Digital Student Card.",
    fullDescription:"Adisty UAD is a UI/UX prototype designed in Figma to visualize a modern student authentication system using Face ID login and a digital student ID (E-KTM). This prototype focuses on delivering a seamless and intuitive user experience, showcasing user flows such as biometric login, identity verification, and digital card access. Designed with a clean and user-centered approach, the interface highlights accessibility, simplicity, and efficiency for campus environments. The prototype serves as a conceptual solution to enhance digital identity systems in universities, demonstrating how technology can improve both security and user convenience without relying on physical cards",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.figma.com/proto/gKwtnhIBcsO6DgngyYUPZo/NGAPAKBOYS-ADISTY?node-id=1105-379&viewport=462%2C69%2C0.09&t=djRVH5kTklyZMNjX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1105%3A379&page-id=1103%3A1732",
    dad: "300",
  },
];