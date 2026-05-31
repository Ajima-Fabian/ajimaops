import { Link } from "react-router-dom";

const Button = ({children,
                    to, 
                    href, 
                    variant = 'primary', 
                    className = '', 
                    ...props
                }) => {

    
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:ring-blue-500",
        secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:ring-blue-500",
        outline: "border-blue-600 text-blue-400 bg-transparent hover:bg-blue-600/10 hover:border-blue-500"
    }

    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if(to){
        return (
            <Link to={to} className={styles} {...props}>
                {children}
            </Link>
        )
    }

    if(href){
        return (
            <a href={href} className={styles} {...props}>{children}</a>
        )
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}


export default Button