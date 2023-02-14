import Image from 'next/image'

const NightDefinitions = () => {
  return (
    <>
      <h2>Night Definitions</h2>
      <p>
        Position lights (and anti-collision lights if the aircraft is equipped) are required from sunrise to sunset.
      </p>
      <p>
        Between the end of civil twilight and the start of civil twilight the next day, you may log night flight time.
      </p>
      <p>
        3 takeoffs and landings to a full stop in the past 90 days are required to have been logged in order to carry
        passengers at night. These takeoffs and landings must take place between 1 hour after sunset and 1 hour before
        sunrise the next day.
      </p>
      <Image src="/images/night.png" alt="Night Flight" width={800} height={298} />
    </>
  )
}

export default NightDefinitions
