<?php
namespace IZiviPlanningBundle\Controller;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use IZiviPlanningBundle\Exception\InvalidFormException;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Request\ParamFetcherInterface;
use FOS\RestBundle\View\View;
use Symfony\Component\Form\FormTypeInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * TODO: security check allow Admin only
 */
class CodeController extends BaseController
{
    private $handlerSerivce = 'izivi.code.handler';

    /**
     * List all Entities.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets a Collection of Codes",
     * output = "IZiviPlanningBundle\Entity\Code",
     * section="codes",
     * statusCodes = {
     * 200 = "Returned when successful"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json"})
     *
     * @param ParamFetcherInterface $paramFetcher
     *            param fetcher codes
     *
     * @return array
     */
    public function getCodesAction(ParamFetcherInterface $paramFetcher)
    {
        return $this->view($this->container->get($this->handlerSerivce)->all($paramFetcher->all()), Response::HTTP_OK);
    }

    /**
     * Create a new Entity from the submitted data.
     *
     * @ApiDoc(
     * resource = true,
     * description = "Creates a new code from the submitted data.",
     * input = "IZiviPlanningBundle\Type\CodeFormType",
     * output = "IZiviPlanningBundle\Entity\Code",
     * section="codes",
     * statusCodes = {
     * 201 = "Returned when successful",
     * 400 = "Returned when the form has errors"
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true
     * )
     *
     * @param Request $request
     *            the request object
     *
     * @return FormTypeInterface|View
     */
    public function postCodeAction(Request $request)
    {
        try {
            $newCode = $this->container->get($this->handlerSerivce)->post($request->request->all());
            return $this->view($newCode, Response::HTTP_CREATED);
        } catch (InvalidFormException $exception) {
            return $exception->getForm();
        }
    }

    /**
     * Delete existing Entity
     *
     * @ApiDoc(
     * resource = true,
     * section="codes",
     * statusCodes = {
     * 204 = "Returned when successful",
     * 404 = "Returned when Code does not exist."
     * }
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true
     * )
     *
     * @param int $id
     *            id of entry
     *
     * @return FormTypeInterface|View
     *
     * @throws NotFoundHttpException when page not exist
     */
    public function deleteCodeAction($id)
    {
        $this->container->get($this->handlerSerivce)->delete($this->getOr404($id, $this->handlerSerivce));
        return $this->view(null, Response::HTTP_NO_CONTENT);
    }
}