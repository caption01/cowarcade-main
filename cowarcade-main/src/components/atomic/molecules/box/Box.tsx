import { BoxElement, BoxProps } from './Types'

const Box = ({ children }: BoxProps): BoxElement => {
    return (
        <div>
            <h1>hello Box</h1>
            {children}
        </div>
    )
}

export default Box