export default function Navigation({children, href}){
    return (
        <a href={href} className="hover:border-2 hover:rounded-md py-2 px-4 hover:font-bold">{children}</a>
    )
}