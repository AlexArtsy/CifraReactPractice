import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';
import '../../tailwind-global.css';

type ModalProps = {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Modal = ({ trigger, title, children, isOpen, onOpenChange }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="tw-fixed tw-inset-0 tw-bg-black/50 tw-backdrop-blur-sm tw-z-50" />
        <Dialog.Content className="tw-fixed tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6 tw-w-full tw-max-w-md tw-z-50 focus:tw-outline-none">
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
            <Dialog.Title className="tw-text-xl tw-font-semibold tw-text-gray-800">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="tw-text-gray-500 hover:tw-text-gray-700 tw-transition-colors"
                aria-label="Close"
              >
                <Cross2Icon className="tw-h-5 tw-w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="tw-mb-4 tw-text-gray-700">{children}</div>

          <div className="tw-flex tw-justify-end tw-gap-2">
            <Dialog.Close asChild>
              <button className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-gray-100 hover:tw-bg-gray-200 tw-rounded-md tw-transition-colors">
                Закрыть
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
