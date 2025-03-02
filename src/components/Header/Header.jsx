import { Avatar, Badge, Dropdown, Input } from "antd";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/z5581996737056_ec0f21259be216a6270fde9f7c300f4f.jpg';
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext } from "react";
import { userContext } from "../../App";
function Header() {
    const { dataUser } = useContext(userContext); 
    const items = [
        {
            key: '1',
            icon: <IoIosLogOut />,
            label: (
                <Link to='/login'>Log out</Link>
            )
        }
    ]
    return (
        <>
            <div className="py-[10px] border-b-[1px] flex items-center justify-between mx-auto container px-[100px]">
                <Input placeholder="Search..." prefix={<IoIosSearch />} className="w-[500px]" />
                <div className="flex items-center">
                    <Badge count={5} size="small" className="mr-[30px]">
                        <GoBell className="text-[1.2rem]" />
                    </Badge>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={'click'}
                    >
                        <div className="flex items-center justify-center">
                            <Avatar src={avatar} />
                            <span className="text-[0.9rem] ml-[10px]">{dataUser.data.fullName}</span>
                            <IoMdArrowDropdown />
                        </div>
                    </Dropdown>

                </div>
            </div>
        </>
    )
}
export default Header;