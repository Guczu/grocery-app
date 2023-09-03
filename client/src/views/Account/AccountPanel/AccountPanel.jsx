const AccountPanel = ({ menuOptions, panelIndex }) => {
    console.log(menuOptions[0].component)
  return (
    <div className="w-3/4 flex justify-center p-6">
        {menuOptions[panelIndex].component}
    </div>
  )
}

export default AccountPanel