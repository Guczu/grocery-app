import { Link } from 'react-router-dom'
import { footerData } from '../../../constants'

const FooterList = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly md:p-12'>
        {footerData.map((column) => (
            <div className='mb-12'>
                <p className="text-typography-text text-heading-2 pb-4">{column.title}</p>
                <ul>
                    {column.links.map((link) => (
                        <li className="text-typography-paragraph text-body-6">
                            <Link to={link.routeLink}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default FooterList