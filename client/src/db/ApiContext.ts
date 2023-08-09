interface ApiContextProps {
    readonly apiBaseUrl: string;
}

const ApiContext: ApiContextProps = {
    apiBaseUrl: "http://localhost:4000/api",
};

export default ApiContext;