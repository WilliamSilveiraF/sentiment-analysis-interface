export interface ActionProps {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ActionProviderProps {
    children: React.ReactNode;
}