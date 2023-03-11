// import './friends.module.css'

export const FriendList = ({friends}) => {
    // console.log(friends)
    return (
        <section className="friends">
            <ul className="friends-list">
                {friends.map(({avatar, id, isOnline, name}) => {
                    return (
                        <li key={id} className="friends-item">
                            <span className='isOnline' ></span>
                            <img className="avatar-friend" src={avatar} alt="User avatar" width="48"/>
                            <p className="name">{name}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
