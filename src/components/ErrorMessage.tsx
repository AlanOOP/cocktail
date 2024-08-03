
const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-red-200 text-red-500 border-l-4 border-red-500 p-2 font-bold">
            {children}
        </div>
    )
}

export default ErrorMessage