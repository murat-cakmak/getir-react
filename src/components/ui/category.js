export default function Category ({ category: {id, title, image} }) {
    return (
        <a href="#" className="flex flex-col group items-center gap-y-2 text-center transition hover:bg-purple-50 mb-4">
            <img src={ image } alt={ title } className="w-12 h-12 rounded-md border border-gray-200" />
            <p className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight whitespace-nowrap">{ title }</p>
        </a>
    )
}

