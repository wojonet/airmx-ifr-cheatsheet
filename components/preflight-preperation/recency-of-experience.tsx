import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import Todo from '../todo'

const RecencyOfExperience = () => {
  return (
    <>
      <h2>Recency of Experience</h2>
      <cite>
        <a
          href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-B/section-61.56"
          target="_blank"
          rel="noreferrer"
        >
          §61.56
        </a>
        <span>{' & '}</span>
        <a
          href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-B/section-61.57"
          target="_blank"
          rel="noreferrer"
        >
          §61.57
        </a>
      </cite>
      <div>
        <p>The following are requirements to consider before undertaking a VFR or IFR flight.</p>
        <h3>Current Flight Reveiw</h3>
        <p>
          A flight review is required every 24 calendar months. The flight review must consist of at least 1 hour of
          ground training and 1 hour of flight training.
        </p>
        <p>
          A flight review is <strong>not</strong> required if one of the following applies:
        </p>
        <ul>
          <li>
            The pilot has completed a pilot proficiency check or passed a practical test for an additional certificate,
            rating or operating privilege (by an appoved check airman or designated examiner).
          </li>
          <li>The pilot has completed a phase of the FAA&apos;s WINGS program.</li>
        </ul>
        <Alert color="yellow" icon={<IconAlertCircle size={16} />} className="my-4">
          A flight review may be completed in a simulator given is part of an approved Part 142 training program and the
          simulator reperesents the aircraft for which the pilot is rated.
        </Alert>
        <h3>
          Recent Flight Experience <span>(VFR)</span>
        </h3>
        <p>
          <strong>Day: </strong>In order to carry passengers on a day flight, a pilot must have completed 3 takeoffs and
          landings within the previous 90 days. If the aircraft is a tailwheel aircraft, the pilot must have completed
          each landing to a full stop.
        </p>
        <p>
          <strong>Night: </strong>In order to carry passengers on a night flight, a pilot must have completed 3 takeoffs
          and landings (to a full stop) within the previous 90 days. These takeoffs and landings must take place between
          1 hour after after sunset and 1 hour before sunrise.{' '}
          <Todo>TODO: Link to how to log night flight and a diagram of night stuff.</Todo>
        </p>
        <Alert color="yellow" icon={<IconAlertCircle size={16} />} className="my-4">
          A flight review may be completed in a simulator approved for takeoffs and landings given it is part of an
          approved Part 142 training program.
        </Alert>
        <h3>
          Recent Flight Experience <span>(IFR)</span>
        </h3>
      </div>
    </>
  )
}

export default RecencyOfExperience
