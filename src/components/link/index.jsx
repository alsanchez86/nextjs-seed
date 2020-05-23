import Link from "next/link";
import { format } from "url";
import { publicUrl } from "../../utils";

export default ({ children, ...props }) =>

<Link {...props} as={format(`${publicUrl}${props.href}`)}>
    {children}
</Link>