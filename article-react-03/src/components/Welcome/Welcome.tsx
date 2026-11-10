interface HelloProps {
  name: string;
}

const Hello = ({name} : HelloProps) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default Hello