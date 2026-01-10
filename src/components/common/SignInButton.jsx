function SignInButton({onClick, className, icon: Icon, children}) {
    const generalStyling = "flex items-center justify-center gap-[0.75em] rounded-[10px] py-[0.75em] px-[1em] font-bold transition-colors duration-[0.3s]"

    return (
        <button onClick={onClick} className={`${generalStyling} ${className}`}>
            {Icon && <Icon className="w-[1.5em] h-[1.5em]"/>}
            {children}
        </button>
    )
}

export default SignInButton;