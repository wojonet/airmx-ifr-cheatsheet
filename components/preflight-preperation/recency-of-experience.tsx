import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import Image from 'next/image'
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
          1 hour after sunset and 1 hour before sunrise.
          <br />
          <cite>
            Appendix: <a href="#night-definitions">Night Definitions</a>
          </cite>
        </p>
        <Alert color="yellow" icon={<IconAlertCircle size={16} />} className="my-4">
          A flight review may be completed in a simulator approved for takeoffs and landings given it is part of an
          approved Part 142 training program.
        </Alert>
        <h3>
          Recent Flight Experience <span>(IFR)</span>
        </h3>
        <Todo>Add diagram for experince (to appendix?)</Todo>
        <p>
          <h4>In the past 6 months</h4>
          In order to conduct a flight under IFR, a pilot must have completed and logged the following within the
          previous <strong>6 calendar months</strong> in actual or simulated IFR conditions.
          <ul>
            <li>Six instrument approaches</li>
            <li>Holding procedures</li>
            <li>Intercepting and tracking courses using a navigational system</li>
          </ul>
          <Alert color="yellow" icon={<IconAlertCircle size={16} />} className="my-4">
            <p>
              These requirements may be completed in an approved full flight simulator, flight training device, or
              aviation training device provided the device represents the category of aircraft the pilot will use.
            </p>
            <p>You must log information on the training device, time spent and content.</p>
          </Alert>
          <h4>6 month grace period</h4>
          <p>
            <p>
              If the pilot has not completed the above requirements within the previous 6 months, has an additional 6
              months to complete the above requirements to be instrument current, however, the pilot must perform the
              tasks under simulated instrument conditions with a safety pilot (or flight instructor) in the aircraft.
            </p>
            <p>
              The safety pilot must hold at least a private pilot certificate rated for the category and class of
              aircraft.
            </p>
            <cite>
              For more information, see:{' '}
              <a
                href="https://drs.faa.gov/browse/excelExternalWindow/DRSDOCID116119221020230104191820.0001"
                target="_blank"
                rel="noreferrer"
              >
                Order 8900.1, Flight Standards Information Management System (FSIMS) Manual, volume 5, Chapter 2,
                Section 3, Paragraph 5-264
              </a>
            </cite>

            <p>
              <h4>More than 12 calendar months</h4>
              <p>
                If a pilot still has not completed the required tasks mentioned above, they must pass an Instrument
                Proficiency Check (IPC). This must be done with a CFII, examiner, or check pilot.
              </p>
              <p>
                The IPC must cover:
                <ul>
                  <li>ATC clearances and procedures</li>
                  <li>Navigation systems</li>
                  <li>Instrument approach procedures</li>
                  <li>Emergency operations</li>
                  <li>Postflight procedures</li>
                </ul>
              </p>
            </p>
          </p>
        </p>
      </div>
    </>
  )
}

export default RecencyOfExperience
