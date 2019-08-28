### Instalation

```sh
npm i react-conditional-classes --save
```

### Usage with hooks

```js
import { useClassNames } from 'react-conditional-classes';

export default function Component(props) {
    const componentClassNames = useClassNames({
        'component is-open': props.isOpen,
        'component': !props.isOpen
    });

    return (
        <div className={componentClassNames}>
            ...
        </div>
    );
}
```