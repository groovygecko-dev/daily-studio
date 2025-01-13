import { useMemo } from 'react';
import { Button } from '@/ui/Button';
import { Icon } from '@/ui/Icons';
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/Tooltip';
import { usePermissions } from '@daily-co/daily-react';

import { useStage } from '@/hooks/useStage';
import { useUserData } from '@/hooks/useUserData';

export const VisibilityMenu = ({ sessionId }: { sessionId: string }) => {
  const { hasPresence } = usePermissions(sessionId);
  const userData = useUserData(sessionId);

  const isOnStage = useMemo(
    () => hasPresence && userData?.onStage,
    [hasPresence, userData],
  );

  const { setStageVisibility } = useStage();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isOnStage ? 'destructive' : 'default'}
            onClick={() => setStageVisibility(sessionId, !isOnStage)}
            size="auto"
            className="opacity-0 group-hover:opacity-100 mr-1.5 transition duration-300"
          >
            {isOnStage ? (
              <Icon icon="userMinus" className="h-4 w-4" />
            ) : (
              <Icon icon="userPlus" className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {isOnStage ? 'Demote user to backstage' : 'Promote user to stage'}
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
