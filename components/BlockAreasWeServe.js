import style from './BlockAreasWeServe.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export function BlockAreasWeServe(props) {
  return (
    <section className={`${style.blockAreasWeServe} block`}>
      <h2>Areas We Serve</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Detroit
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Grosse Pointe
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Eastpointe
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Warren
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Novi
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Highland Park
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Hamtramck
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Madison Heights
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Royal Oak
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Southfield
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Ann Arbor
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Ypsilanti
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Flint
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Brighton
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          Livonia
        </li>
        <li>
          and more...
        </li>
      </ul>
    </section>
  )
}

export default BlockAreasWeServe;