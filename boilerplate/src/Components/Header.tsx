// import { Link } from "react-router-dom";
// import styles from "./Header.module.scss";
// import logo from "../Images/naviconblack.svg";
// import { useState } from "react";

// type Props = {
//   time: string;
// };

// function Header({ time }: Props) {
//   const [toggleDropdown, setToggleDropdown] = useState(false);

//   return (
//     <nav className={styles.section}>
//       <img
//         className={styles.img}
//         src={logo}
//         alt="picture of logo"
//         onClick={() => setToggleDropdown(!toggleDropdown)}
//       />

//       {toggleDropdown ? (
//         <section onClick={() => setToggleDropdown(false)}>
//           <Link to="/analog" state={time}>
//             Analog timer
//           </Link>
//           <Link to="/digital">Digital timer</Link>
//           <Link to="/visuell">Visuell timer</Link>
//         </section>
//       ) : (
//         <section></section>
//       )}
//     </nav>
//   );
// }

// export default Header;
