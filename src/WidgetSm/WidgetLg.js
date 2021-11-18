import "./WidgetLg.css"
import React from 'react'

const WidgetLg = () => {
    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transaction</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">Customer</th>
        <th className="widgetLgTh">Date</th>
        <th className="widgetLgTh">Amount</th>
        <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt="" className="widgetLgImg" />
        <span className="widgetLgName">Henry cavill</span>
        </td>
        <td className="widgetLgDate">17 Nov 2021</td>
        <td className="widgetLgAmount">$220.00</td>
        <td className="widgetLgStatus">
        <Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglTX4gdYvHuH2QvWPNPhYwqToEmwZ2vZp1Qx9D_tscfy-zGm9jlxbEaloSgLrS5BT1uA&usqp=CAU" alt="" className="widgetLgImg" />
        <span className="widgetLgName">Amy Adams</span>
        </td>
        <td className="widgetLgDate">17 Nov 2021</td>
        <td className="widgetLgAmount">$190.00</td>
        <td className="widgetLgStatus">
        <Button type="Decline"/></td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSjz_45XoQXhUVr3rkq-LD2__l9FIerbB9OTPzK7hOJXXE1SbK3FSim6-8-734Dgh5ps&usqp=CAU" alt="" className="widgetLgImg" />
        <span className="widgetLgName">Jennifer Lawrence</span>
        </td>
        <td className="widgetLgDate">17 Nov 2021</td>
        <td className="widgetLgAmount">$143.00</td>
        <td className="widgetLgStatus">
        <Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
        <img src="https://media.istockphoto.com/vectors/profile-image-or-avatar-with-a-picture-of-a-businessman-or-manager-vector-id869591564?k=20&m=869591564&s=170667a&w=0&h=SlrtKiLIXVRpHRn778SSHNDgmMcPb9NL5InHaJJ66Ms=" alt="" className="widgetLgImg" />
        <span className="widgetLgName">Darren gallo</span>
        </td>
        <td className="widgetLgDate">17 Nov 2021</td>
        <td className="widgetLgAmount">$340.00</td>
        <td className="widgetLgStatus">
        <Button type="Approved"/></td>
        </tr>
        </table>
            </div>

    )
}

export default WidgetLg
