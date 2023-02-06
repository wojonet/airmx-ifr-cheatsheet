import React from 'react'
import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

const CertificationExperienceRequirements = () => {
  return (
    <>
      <h2>Certification Experience Requirements</h2>
      <cite>
        <a
          href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-D/part-61/subpart-B/section-61.65"
          target="_blank"
          rel="noreferrer"
        >
          §61.65
        </a>
      </cite>
      <div>
        To be eligible for an instrument rating, you must have:
        <ul>
          <li>50 hours of PIC cross country time with at least 10 of those hours in airplanes.</li>
          <li>40 hours of simulated or actual instrument time with at least 15 of those hours with a CFII.</li>
          <li>
            3 hours of simulated or actual instrument time with a CFII must have been logged in 2 months prior to the
            practical test
          </li>
          <li>
            One cross country flight of at least 250 nautical miles, which must be with a CFII, along airways or routes
            directed by ATC, include an instrument approach at each airport, and includes 3 different approaches using
            naviation systems.
          </li>
        </ul>
        You may use a full flight simulator or flight training device to meet the instrument time requirement, up to 20
        hours.
        <Alert color="yellow" icon={<IconAlertCircle size={16} />} className="my-4">
          If training is conducted under part 142, then up to 30 hours may be logged with a full flight simulator or
          flight training device.
        </Alert>
        You may also use an aviation training device, up to 10 hours in a basic aviation training device or 20 hours in
        an advanced aviation training device.
      </div>
    </>
  )
}

export default CertificationExperienceRequirements
