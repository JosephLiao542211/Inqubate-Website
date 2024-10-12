export default function Navigation({children, href}){
    return (
        <a href={href} className="hover:border-2 hover:rounded-md px-4 hover:font-bold items-center  justify-center flex w-32 transition-[font-weight] transition-transform hover:-translate-y-1">
            <span>{children}</span>
        </a>
    )
}