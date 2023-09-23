'use client'

import React from 'react'

import { WorkGalahadAppTabTopApps } from '../work-galahad-app-tab-top-apps'
import { WorkNavigationCollapseButtonAndNubs } from '../work-navigation-collapse-button-and-nubs'
import { useStyles } from './styles'

export default function WorkGalahadUIAppsList() {
  const classes = useStyles()

  return (
    <div role="grid" className={classes.root}>
      <WorkGalahadAppTabTopApps />
      <WorkNavigationCollapseButtonAndNubs />
    </div>
  )
}
