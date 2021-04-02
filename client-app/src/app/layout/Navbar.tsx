import { Button, Container, Menu } from "semantic-ui-react"

interface Props {
    OpenForm: () => void;
}
const Navbar = ({OpenForm} : Props) => {



    return (
       <Menu inverted fixed='top'>
           <Container>
           <Menu.Item header>
                    BOOKAPP
                </Menu.Item>
                <Menu.Item name='Books' />
                <Menu.Item>
                    <Button onClick={OpenForm} positive content='Create Book' />
                </Menu.Item>
           </Container>
       </Menu>
    )
}

export default Navbar
