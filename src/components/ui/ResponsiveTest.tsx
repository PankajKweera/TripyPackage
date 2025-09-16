'use client'

import { useBreakpoint, useIsMobile, useIsTablet, useIsDesktop } from '@/lib/responsive'
import { Card, CardContent, CardHeader, CardTitle } from './Card'

const ResponsiveTest = () => {
  const breakpoint = useBreakpoint()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Responsive Test Component</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl font-bold text-primary-600">{breakpoint}</div>
            <div className="text-sm text-gray-600">Current Breakpoint</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{isMobile ? 'Yes' : 'No'}</div>
            <div className="text-sm text-gray-600">Is Mobile</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{isTablet ? 'Yes' : 'No'}</div>
            <div className="text-sm text-gray-600">Is Tablet</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{isDesktop ? 'Yes' : 'No'}</div>
            <div className="text-sm text-gray-600">Is Desktop</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Responsive Grid Test</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="h-8 bg-primary-200 rounded flex items-center justify-center text-xs font-medium text-primary-800"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ResponsiveTest
