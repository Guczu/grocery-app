const AccountMenu = ({ menuOptions, setPanelIndex }) => {
  return (
    <div className="w-1/2 md:w-1/4 flex flex-col items-center">

        <span className="text-heading-5 p-6">
            Konto
        </span>

        {menuOptions.map((link, index) => (
            <button
                key={index}
                onClick={() => setPanelIndex(link.panelId)}
                className="hover:border-b-[3px] border-main-third rounded-[3px]"
            >
                <span>{link.name}</span>
            </button>
        ))}
    </div>
  )
}

export default AccountMenu