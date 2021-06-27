import styles from './ListItems.module.css';
import styled from 'styled-components';
import {convectRuB} from "../../../Functions/Functions";

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
    font-size: 30px;
    transition: all 2s;
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgb(0, 0, 0, 1);

    &:after {
      opacity: 0;
    }
  }
`;

const ListItems = ({setOpenItem, DBMenu}) => {

  return (
    <ul className={styles.items}>
      {DBMenu.map(item =>
        <Item img={item.img} key={item.id} onClick={ () => setOpenItem(item)}>
          <p className={styles.itemName}>{item.name}</p>
          <p>{convectRuB(item.price)}</p>
        </Item>
      )}
    </ul>
  )
}

export default ListItems;