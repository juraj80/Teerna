import { useP5 } from '@gen/react-use-p5';
import { sketch } from './sketch';
import { Container } from './styles'

export default function MapView({}) {
    const [setRef] = useP5(sketch);

    return <Container ref={setRef}></Container>
}